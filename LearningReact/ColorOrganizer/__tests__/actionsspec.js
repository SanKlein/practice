import C from '../src/constants'
import storeFactory from '../src/store'
import { addColor } from '../src/actions'

describe("addColor", () => {

    let store
    const colors = [
        {
            id: "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
            title: "lawn",
            color: "#44ef37",
            timestamp: "Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)",
            rating: 4
        },
        {
            id: "f9005b4e-975e-433d-a646-79df172e1dbb",
            title: "ocean blue",
            color: "#0061ff",
            timestamp: "Mon Apr 11 2016 12:54:31 GMT-0700 (PDT)",
            rating: 2
        },
        {
            id: "58d9caee-6ea6-4d7b-9984-65b145031979",
            title: "tomato",
            color: "#ff4b47",
            timestamp: "Mon Apr 11 2016 12:54:43 GMT-0700 (PDT)",
            rating: 0
        }
    ]

    beforeAll(() => {
        store = storeFactory({colors})
        store.dispatch(addColor("Dark Blue", "#000033"))
    })

    it("should add a new color", () =>
        expect(store.getState().colors.length).toBe(4))

    it("should add a unique guid id", () =>
        expect(store.getState().colors[3].id.length).toBe(36))

    it("should set the rating to 0", () =>
        expect(store.getState().colors[3].rating).toBe(0))

    it("should set timestamp", () =>
        expect(store.getState().colors[3].timestamp).toBeDefined())

})
