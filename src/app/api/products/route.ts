import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URI!);

        const db = client.db('e-commerce');
        const productsCollection = db.collection('products');
        const data = await productsCollection.find({}).toArray();

        client.close();
        return NextResponse.json(data);
    } catch (e) {
        return NextResponse.json({
            message: 'successfully inserted',
            data: e,
        });
    }
}

export async function PUT(req: NextRequest) {
    let client;
    try {
        client = await MongoClient.connect(process.env.MONGODB_URI!);

        const data = await req.json();

        const db = client.db('e-commerce');
        const prodcutsCollection = db.collection('products');
        await prodcutsCollection.updateMany(
            { name: data.name },
            {
                $set: {
                    sellCount: data.sellCount,
                    star: data.star,
                    ram: data.ram,
                    storage: data.storage,
                    battery: data.battery,
                    comments: [],
                },
            }
        );
        client.close();

        return new Response(JSON.stringify({ message: 'Product updated' }));
    } catch (e) {
        return new Response('An error occurred');
    }
}

export async function POST(req: Request) {
    let client;
    try {
        client = await MongoClient.connect(process.env.MONGODB_URI!);

        const data = await req.json();

        const db = client.db('e-commerce');
        const prodcutsCollection = db.collection('products');
        await prodcutsCollection.insertOne(data);
        client.close;

        return new Response('Product created', { status: 201 });
    } catch (e: any) {
        return new Response('An error occurred', {
            status: 500,
            statusText: e.toString(),
        });
    }
}
