import qs from 'qs'
import type { Diagnosis } from './payload-types'

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
): Promise<Array<Diagnosis>> {
    const stringifiedQuery = qs.stringify(query)
    const data = []
    const firstRecord = await apiFetch(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/diagnosis?${stringifiedQuery}`,
    )
    data.push(...firstRecord.docs)
    let pageNum = firstRecord.page
    let hasNextPage = firstRecord.hasNextPage
    while (hasNextPage) {
        pageNum = pageNum + 1
        const record = await apiFetch(
            `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/diagnosis?page=${pageNum}&${stringifiedQuery}`,
        )
        data.push(...record.docs)
        hasNextPage = record.hasNextPage
    }
    //@ts-ignore
    return data
}
