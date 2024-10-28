import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';

const LineChart = () => {
    
    const subjectMarksData = [
        { "name": "Student 1", "math": 85, "physics": 90, "chemistry": 88 },
        { "name": "Student 2", "math": 75, "physics": 82, "chemistry": 60 },
        { "name": "Student 3", "math": 95, "physics": 95, "chemistry": 91 },
        { "name": "Student 4", "math": 65, "physics": 86, "chemistry": 84 },
        { "name": "Student 5", "math": 75, "physics": 80, "chemistry": 70 },
        { "name": "Student 6", "math": 95, "physics": 92, "chemistry": 90 },
        { "name": "Student 7", "math": 80, "physics": 87, "chemistry": 82 },
        { "name": "Student 8", "math": 70, "physics": 81, "chemistry": 80 },
        { "name": "Student 9", "math": 80, "physics": 78, "chemistry": 77 },
        { "name": "Student 10", "math": 91, "physics": 94, "chemistry": 99 }
    ]

    return (
        <div>
            <LChart width={600} height={400} data={subjectMarksData}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Line dataKey="math" stroke="yellow"></Line>
                <Line dataKey="physics" stroke="red"></Line>
                <Line dataKey="chemistry" stroke="#8884d8"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;