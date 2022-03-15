// servis
const first = () => {
    return new Promise((res, rej) => {
        rej('I am rejecting all of this!');
    });
};

// hook
const useFirst = () => {
    try {
        first()
    } catch (error) {
        console.log(error);
    }
};

// komponenta
(() => {
    useFirst();
})();