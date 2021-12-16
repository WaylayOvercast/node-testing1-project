const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  // test('[2] returns a copy, leaving the original object intact', () => {})
  test('[2] returns a copy, expecting original object to NOT be mutated',() =>{
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz'  }
    const expected = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(input)
    expect(input).toEqual(expected)

  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  // test('[3] returns an object with the properties trimmed', () => {})
  // test('[4] the object returned is the exact same one we passed in', () => {})
  test('[3] returns an object, expecting the properties to be trimmed',() =>{
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz'  }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)

  })
  test('[4] the object returned is the exact same one we passed in',() =>{
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz'  }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
     utils.trimPropertiesMutation(input)
    expect(input).toEqual(expected)

  })
})

describe('[Exercise 3] findLargestInteger', () => {
  // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [ {int: 2}, {int: 200}, {int: 199}, {int: 1},]
    const expected = 200
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter 
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  // test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {})
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const initialCount = counter.countDown()
    expect(initialCount).toBe(3)
  })
  
  // test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {})
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const secondCount = counter.countDown()
    expect(secondCount).toBe(2)
  })

  // test('[8] the count eventually reaches zero but does not go below zero', () => {})
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    const zero = counter.countDown()
    const notNegative = counter.countDown()

    expect(zero).toBe(0)
    expect(notNegative).toBe(0)

  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const initialNext = seasons.next()
    expect(initialNext).toBe("summer")
  })
  // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const second = seasons.next()
    expect(second).toBe('fall')
  })
  // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    const third = seasons.next()
    expect(third).toBe('winter')
  })
  // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    const fourth = seasons.next()
    expect(fourth).toBe('spring')
  })
  // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    const fifth = seasons.next()
    expect(fifth).toBe('summer')
  })
  // test('[14] the 40th call of seasons.next returns "spring"', () => {})
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    
    for(let i = 0; i< 39; i++){ seasons.next() }
    const fourty = seasons.next()
    
    expect(fourty).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  // test('[15] driving the car returns the updated odometer', () => {})
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
