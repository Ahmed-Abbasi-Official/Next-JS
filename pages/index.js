import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import img from '../public/color.jpeg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
      src={img}
      alt='img'
      />
    </div>
  )
}
