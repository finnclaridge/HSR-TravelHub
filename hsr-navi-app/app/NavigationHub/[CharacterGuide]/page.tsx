import Link from "next/link";
import React from "react";


const Page = ({ params }: { params: { CharacterGuide: string } }) => {

    const { CharacterGuide } = params;

    return (
        <h1 className="text-3xl font-bold underline">
            Character Guide: {CharacterGuide}
            <br />
            <Link href="/NavigationHub">Back to Navigation Hub</Link>
        </h1>
    );
}