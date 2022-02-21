import { FC } from 'react';
import { Sensor } from '../../generated/graphql';

interface Props {
  sensor: Sensor
}

const EditSensor: FC<Props> = ({ sensor }) => {
  return <>{sensor.sensor_type}</>
}

export default EditSensor