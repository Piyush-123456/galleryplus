"use client";
import React from 'react'
import css from './id.module.css'
const page = ({params}) => {
  return (
    <div className={css.main}>
        <img src={`https://picsum.photos/id/${params.id}/5000/3333`} alt="" />
    </div>
  )
}

export default page