const Javascript11 = () => {
    const z = [1, 2, 3, 4]
    let a, b, c
    [a, b,, c] = z

    return (
        <>
            <h1>分割代入</h1>
            <p>a: {a}</p>
            <p>b: {b}</p>
            <p>c: {c}</p>
        </>
    )
}

export default Javascript11