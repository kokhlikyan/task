<?php

namespace App\Http\Controllers;

use App\Events\OrderCreated;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function __invoke(): void
    {
        $order = Order::query()->create([
            // order data
        ]);

        event(new OrderCreated($order->id));
    }
}
