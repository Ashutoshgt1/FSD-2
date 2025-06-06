const Arrayfilter1 = () => {
    const people = [
        { name: "Keyur", age: 20 },
        { name: "Ayush", age: 60 }
    ];

    const newarr = people.filter((pe) => {
        if (pe.age >= 40) {
            return false;
        } else {
            return true;
        }
    });

    return (
        <>
            <h1>Name {newarr[0].name}</h1>
        </>
    );
};

export default Arrayfilter1;
