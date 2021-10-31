import React from 'react'
import Link from 'next/link'

export default function Index() {
    return (
        <div>
            Sense 
            Landing page here
            <Link href="/Capture" passHref>
                <button> Go to Capture</button>
            </Link>
        </div>
    )
}
