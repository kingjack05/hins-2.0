import qs from 'qs'
import type { Diagnosis } from './payload-types'

interface PayloadCollection<CollectionType> {
    totalDocs: number
    limit: number
    totalPages: number
    page: number
    pagingCounter: number
    hasPrevPage: boolean
    hasNextPage: boolean
    docs: CollectionType[]
    prevPage: number | null
    nextPage: number | null
}

function apiFetch(url: string, options: any = {}) {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const mergedOptions = {
        ...defaultOptions,
        ...options,
    }

    return fetch(url, mergedOptions).then(res => {
        if (res.ok) {
            return res.json()
        }
        console.log(url)
        throw new Error(
            `Error fetching page data: ${res.statusText} (${res.status})}`,
        )
    })
}

export async function getDiagnosis(
    query: any = null,
): Promise<PayloadCollection<Diagnosis>> {
    const stringifiedQuery = qs.stringify(query, { addQueryPrefix: true })
    const data = await apiFetch(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/diagnosis${stringifiedQuery}`,
    )
    //@ts-ignore
    return data
}
