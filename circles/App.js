// Render the circles using React!
const App = (props) => {
    let { circles } = props;
    return (
        <span>
            {
                circles.map((circles, i) => <Circle key={i} color={circles.color} radius={circles.radius} />)
            }

        </span >
    )
}


const Circle = (props) => {
    let { radius, color } = props;

    return <div style={{ height: radius, width: radius, borderRadius: radius, backgroundColor: color }
    }></div >
};  // CHALLENGE: Write a separate Circle component for use in the App component