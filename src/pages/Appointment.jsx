import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from "../context/AppContext";
import "./bookingslot.css";

const Appointment = () => {

  const {treatmentName} = useParams()
  const {treatments} = useContext(AppContext)

  const [treatmentInfo, setTreatmentInfo] = useState(null);
  const[treatmentSlot, setTreatmentSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');



  const fetchTreatmentInfo = async () => {
    const treatmentInfo = treatments.find(treatment => treatment._id === treatmentName)
    setTreatmentInfo(treatmentInfo)
    console.log(treatmentInfo);
  }

  const getAvailablesSlots = async () => {
    setTreatmentSlot([])

    // getting current date
    let today = new Date()

    for(let i = 0 ; i < 30; i++){
    //getting date with index
    let currentDate = new Date(today)
    currentDate.setDate(today.getDate() + i)

    //setting end time of the date with index
    let endTime = new Date()
    endTime.setDate(today.getDate() + i)
    endTime.setHours(22,0,0,0)

    // setting hours
    if (today.getDate() === currentDate.getDate()){
         currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() +1 :10)
         currentDate.setMinutes(currentDate.getMinutes() >30 ? 30 : 0)
    } else {
         currentDate.setHours(9)
         currentDate.setMinutes(0)
    }
    let timeSlots = []

    while(currentDate < endTime) {
         let formattedTime = currentDate.toLocaleDateString([], { hour: '2-digit', minute: '2-digit'})

         // add slot to array
         timeSlots.push({
              datetime: new Date(currentDate),
              time: formattedTime
         })

         // increment current time by 15 minutes
         currentDate.setMinutes(currentDate.getMinutes() + 15)
    }

    setTreatmentSlot(prev => ([...prev, timeSlots]))

    }
    
}


  useEffect(() => {
    fetchTreatmentInfo()
  },[treatments, treatmentName])

  useEffect(() => {
    getAvailablesSlots()
  },[treatmentInfo])

  useEffect(() => {
    console.log(treatmentSlot);
  },[treatmentSlot])

  return treatmentInfo && (
    <div>
      {/*-------*/}
      <div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Appointment;