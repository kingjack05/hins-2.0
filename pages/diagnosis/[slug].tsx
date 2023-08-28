import React from 'react'
import payload from 'payload'
import { getDiagnosis } from '../../api'
import RichText from '../../components/RichText'
import TableOfContent from '../../components/TableOfContent'
import Head from '../../components/Head'
import classes from './diagnosis.module.css'
import { Breadcrumbs } from '../../components/Breadcrumbs'

const DiagnosisRenderer = ({ slug, item }) => {
    // return <pre>{JSON.stringify(item, null, 2)}</pre>
    const pageLevels = [
        { name: item.specialty, href: '/specialty/' + item.specialty },
        { name: item.name, href: slug },
    ]
    return (
        <>
            <Head title={item.name} />
            <div className="m-2 ml-4">
                <Breadcrumbs pageLevels={pageLevels} />
            </div>
            <div className={classes.wrapper}>
                <section className={classes.content + ' prose'}>
                    <section
                        className="putInTOC"
                        id="definition"
                        data-name="Definition"
                    >
                        <h2>Definition</h2>
                        <RichText content={item['definition']} />
                    </section>
                    <section
                        className="putInTOC"
                        id="admission"
                        data-name="Admission Note"
                    >
                        <h2>Admission Note</h2>
                        <RichText content={item['admission_note']} />
                    </section>
                    <section
                        className="putInTOC"
                        id="progress"
                        data-name="Progress Note"
                    >
                        <h2>Progress Note</h2>
                        <b className="block">Subjective</b>
                        <RichText
                            content={item['progress_note']['subjective']}
                        />
                        <b className="block">Objective</b>
                        <RichText
                            content={item['progress_note']['objective']}
                        />
                        <b className="block">Assessment</b>
                        <RichText
                            content={item['progress_note']['assessment']}
                        />
                        <b className="block">Plan</b>
                        <RichText content={item['progress_note']['plan']} />
                    </section>
                    <section
                        className="putInTOC"
                        id="complications"
                        data-name="Complications"
                    >
                        <h2>Complications</h2>
                        <RichText content={item['complications']} />
                    </section>
                    <section
                        className="putInTOC"
                        id="history"
                        data-name="History"
                    >
                        <h2>History</h2>
                        <RichText content={item['history']} />
                    </section>
                    <section
                        className="putInTOC"
                        id="PE"
                        data-name="Physical Examination"
                    >
                        <h2>Physical Examination</h2>
                        <RichText content={item['physical_examintaion']} />
                    </section>
                    <section className="putInTOC" id="labs" data-name="Labs">
                        <h2>Labs</h2>
                        <RichText content={item['lab']} />
                    </section>
                    <section
                        className="putInTOC"
                        id="imaging"
                        data-name="Imaging"
                    >
                        <h2>Imaging</h2>
                        <RichText content={item['imaging']} />
                    </section>
                    <section className="putInTOC" id="plan" data-name="Plan">
                        <h2>Plan</h2>
                        <RichText content={item['plan']} />
                    </section>
                    <section
                        className="putInTOC"
                        id="etiology"
                        data-name="Etiology"
                    >
                        <h2>Etiology</h2>
                        <RichText content={item['etiology']} />
                    </section>
                    <section
                        className="putInTOC"
                        id="risk_factors"
                        data-name="Risk Factors"
                    >
                        <h2>Risk Factors</h2>
                        <RichText content={item['risk_factors']} />
                    </section>
                    <section
                        className="putInTOC"
                        id="differential_diagnosis"
                        data-name="Differential Diagnosis"
                    >
                        <h2>Differential Diagnosis</h2>
                        <RichText content={item['differential_diagnosis']} />
                    </section>
                    <section
                        className="putInTOC"
                        id="clinical_notes"
                        data-name="Clinical Notes"
                    >
                        <h2>Clinical Notes</h2>
                        <RichText content={item['clinical_notes']} />
                    </section>
                    <section className="putInTOC" id="cases" data-name="Cases">
                        <h2>Cases</h2>
                        {/* {JSON.stringify(item['cases'])} */}
                        {item['cases']?.map((item, index) => (
                            <div key={index}>
                                <b className="block">Case {index + 1}</b>
                                <RichText content={item.content} />
                            </div>
                        ))}
                    </section>

                    <b id="reference">Reference</b>
                    <RichText content={item['reference']} />
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
