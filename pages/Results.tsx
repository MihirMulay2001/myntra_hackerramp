import React from 'react'
import Link from 'next/link'

export default function Results() {
    return (
        <div>
            <div>
                Item name here
                <Link href="/Item/shirt" passHref>
                    <button> buy item</button>
                </Link>
            </div>
        </div>
    )
}
