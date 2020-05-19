import { Repository, getRepository } from 'typeorm';

import Appointment from '../entities/Appointment';
import IAppointmentsService from '@modules/appointments/repositories/IAppointmentsService';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmetDTO';

class AppointmentsRepository implements IAppointmentsService {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment || undefined;
  }

  public async crate({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = await this.ormRepository.create({ provider_id, date });

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
