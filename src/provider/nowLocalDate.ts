const nowLocalDate = (): Date => {
    const date = new Date()
    
    date.setHours(Number(date.getHours()) - 3)

    return date
}

export { nowLocalDate }