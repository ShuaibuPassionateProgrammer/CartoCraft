import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exists!.</p>
            <p>
                Back to homepage <Link href="/">Click here</Link>
            </p>
        </div>
    );
};

export default NotFound;