export interface INormalDelivery{
    type: string;
    senderAddress: string;
    receiverAddress: string;
    senderPhone: string;
    receiverPhone: string;
    senderName: string;
}

export interface IBuyDelivery{
    type: string;
    address: string;
    buyFrom: string;
    phone: string;
    bonusInfo: string;
    senderName: string;
}