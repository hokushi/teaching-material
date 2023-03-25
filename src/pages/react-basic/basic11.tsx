const Javascript11 = () => {
    const z = [1, 2, 3, 4]
    let a, b, c
    [a, b,, c] = z

    const z2 = [1, 2, 3, 4]
    let a2, b2
    [a2, ...b2] = z2

    const object = {
        'key1': 'value1',
        'key2': 'value2',
        'key3': 'value3'
      }
    const {key1, key3, key4} = object

    const object2 = {
        'key5': 'value1',
        'key6': 'value2',
        'key7': 'value3'
      }
      
      const {key5, ...object3} = object2


    return (
        <>
            <h1>分割代入</h1>
            <p>a: {a}</p>
            <p>b: {b}</p>
            <p>c: {c}</p>
            <h1>...を使った配列</h1>
            <p>a2: {a2}</p>
            <p>b2: {b2}</p>
            <h1>オブジェクトの分割代入</h1>
            <p>key1: {key1}</p>
            <p>key3: {key3}</p>
            <p>key4: {key4}</p>
            <h1>...を使ったオブジェクト</h1>
            <p>key5: {key5}</p>
            <p>object3: {JSON.stringify(object3)}</p>
        </>
    )
}

export default Javascript11