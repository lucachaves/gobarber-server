import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsService {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
