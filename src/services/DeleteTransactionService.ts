import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const trasaction = await transactionsRepository.findOne(id);

    if (!trasaction) {
      throw new AppError('Transaction does not exist');
    }

    await transactionsRepository.remove(trasaction);
  }
}

export default DeleteTransactionService;
