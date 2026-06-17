'use client'

import { useEffect } from 'react'

export default function ScrollToHashOnLoad() {
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash
            setTimeout(() => {
                const target = document.querySelector(id)
                if (target) {
                    const navbarHeight = 80
                    const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight
                    window.scrollTo({ top, behavior: 'smooth' })
                }
            }, 100)
        }
    }, [])

    return null
}