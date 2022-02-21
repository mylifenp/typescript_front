import  { FC } from 'react';
import { Sensor } from '../../generated/graphql';


interface Props {
  sensor: Sensor
}

const SensorForms:FC<Props> = ({ sensor }) => {
  return <>test {sensor.sensor_model}</>
}

export default SensorForms