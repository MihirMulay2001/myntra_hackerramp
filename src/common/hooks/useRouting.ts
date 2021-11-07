import { useRouter } from 'next/router'
import React from 'react'

function useRouting() {
    const router = useRouter()
    const id : string | string[] = router.query.id
    return {id}
}

export default useRouting
