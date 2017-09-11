jest.mock('../../../src/components/ui/Color', () =>
  ({rating, onRate=f=>f, onRemove=f=>f}) =>
    <div className="mockColor">
      <button className="rate" onClick={() => onRate(rating)} />
      <button className="remove" onClick={onRemove} />
    </div>
)

describe("Rendering UI", () => {

  it("Defaults properties correctly", () =>
      expect(shallow(<ColorList />).find('p').text())
          .toBe('No Colors Listed. (Add a Color)')
  )

  it("Clicking default rate button does not cause Error", () => {
        mount(<ColorList colors={_testColors} />)
            .find('button.rate')
            .first()
            .simulate('click')
    })

  it("Clicking default remove button does not cause Error", () => {
      mount(<ColorList colors={_testColors} />)
          .find('button.remove')
          .first()
          .simulate('click')
  })

})

describe("Removing a Color", () => {

    let _remove = jest.fn()

    beforeAll(() =>
        mount(<ColorList colors={_testColors} onRemove={_remove} />)
            .find('button.remove')
            .last()
            .simulate('click')
    )

    it("invokes onRemove Handler", () =>
        expect(_remove).toBeCalled()
    )

    it("removes the correct color", () =>
        expect(_remove).toBeCalledWith(
            "58d9caee-6ea6-4d7b-9984-65b145031979"
        )
    )

})
