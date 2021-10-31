import * as React from 'react'
import Link from 'next/link'

export default function Capture() {
    return (
        <>
            <div>
                camera here
                <Link href="/Results" passHref>
                    <button>Capture</button>
                </Link>
            </div>
        </>
    )
}