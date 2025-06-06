const Arrayfilter3 = () => {
    const people = [
        { name: "Keyur", branch: 'CE' },
        { name: "Ayush", branch: 'IT' },
        { name: "Aashutosh", branch: 'IT'}

    ];

    const newarr = people.filter((pe) => {
        if (pe.branch == "CE") {
            return false;
        } else {
            return true;
        }
    });

    return (
        <>
            <h1>Name {newarr[0].name}</h1>
            <h1>Name {newarr[1].name}</h1>
        </>
    );
};

export default Arrayfilter3;
