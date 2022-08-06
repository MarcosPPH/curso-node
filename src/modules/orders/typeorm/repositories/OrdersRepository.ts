import Customer from '../../../customers/typeorm/entities/Customer';
import { EntityRepository, Repository } from 'typeorm';
import Order from '../entities/Order';

interface Iproduct {
    product_id: string;
    price: number;
    quantity: number;
}

interface IRquest {
    customer: Customer;
    products: Iproduct[];
}

@EntityRepository(Order)
class OrdersRepository extends Repository<Order> {
    public async findById(id: string): Promise<Order | undefined> {
        const order = this.findOne(id, {
            relations: ['order_products', 'customer'],
        });

        return order;
    }

    public async createOrder({ customer, products }: IRquest): Promise<Order> {
        const order = this.create({
            customer,
            order_products: products,
        });

        await this.save(order);

        return order;
    }
}

export default OrdersRepository;
