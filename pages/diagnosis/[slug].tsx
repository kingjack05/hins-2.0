import React from 'react'
import payload from 'payload'
import { getDiagnosis } from '../../api'
import RichText from '../../components/RichText'
import TableOfContent from '../../components/TableOfContent'
import Head from '../../components/Head'
import classes from '../../css/diagnosis.module.css'

const DiagnosisRenderer = ({ slug, item }) => {
    // return <pre>{JSON.stringify(item, null, 2)}</pre>
    return (
        <>
            <Head title={item.name} />
            <div className={classes.wrapper}>
                <section className={classes.content}>
                    <h2 id="admission">Admission Note</h2>
                    <RichText content={item['admission_note']} />
                    <h2 id="progress">Progress Note</h2>
                    <b>Subjective</b>
                    <RichText content={item['progress_note']['subjective']} />
                    <b>Objective</b>
                    <RichText content={item['progress_note']['objective']} />
                    <b>Assessment</b>
                    <RichText content={item['progress_note']['assessment']} />
                    <b>Plan</b>
                    <RichText content={item['progress_note']['plan']} />
                    <h2 id="labs">Labs</h2>
                    <RichText content={item['lab']} />
                    <h2 id="PE">Physical Examination</h2>
                    <RichText content={item['physical_examintaion']} />
                    <h2 id="plan">Plan</h2>
                    <RichText content={item['plan']} />
                    <h2 id="risk_factors">Risk Factors</h2>
                    <RichText content={item['risk_factors']} />
                    <h2 id="summary">Summary Note</h2>
                    <RichText content={item['summary_note']} />
                </section>
                <TableOfContent />
            </div>
        </>
    )
}

export default DiagnosisRenderer

export async function getStaticPaths() {
    const queryResults = await getDiagnosis()

    const slugs = queryResults.docs.map(item => {
        return { params: { slug: item.slug } }
    })
    // console.log(slugs)
    return {
        paths: slugs,
        // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const diagnosisQuery = await payload.find({
        collection: 'diagnosis',
        where: {
            slug: {
                equals: params.slug,
            },
        },
    })

    return { props: { slug: params.slug, item: diagnosisQuery.docs[0] } }
}
