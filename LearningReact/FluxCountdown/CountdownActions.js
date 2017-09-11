const CountdownActions = dispatcher =>
    ({
        tick(currentCount) {
            dispatcher.handleAction({ type: 'TICK' })
        },
        reset(count) {
            dispatcher.handleAction({
                type: 'RESET',
                count
            })
        }
    })
