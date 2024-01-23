export const performTimeConsumingTask = async(timems) => {
    return new Promise((resolve) =>
        setTimeout(
            () => { resolve('result') },
            timems
        )
    );
}