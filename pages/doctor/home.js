import Link from 'next/link'
import MyLayout from '../../components/doctor_layout'
export default function Home() {
    return (
        <>
        <h1 className="title">
        Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </h2>
        </>
    )
  }

  Home.getLayout = (home) => (
    <MyLayout>
      {home}
    </MyLayout>
  )