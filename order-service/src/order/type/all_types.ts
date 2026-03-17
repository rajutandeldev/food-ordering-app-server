export interface RestaurantsMaster {
    name: string;
    location: string;
    phone: string;
    rating: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    updated_by: string;
}

export interface MenuItemsMaster {
    restaurantId: string;
    name: string;
    description: string;
    price: number;
    category: string;
    is_available: boolean;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    updated_by: string;
}

export interface Orders {
    user_id: string
    restaurant_id: string
    total_amount: number
    order_status: string
    payment_status: string
    created_at: Date
    updated_at: Date
    created_by: string;
    updated_by: string;
}