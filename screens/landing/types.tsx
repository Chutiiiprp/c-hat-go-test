export type ProcessCardProps = {
    icons: string;
    title: string;
};

export type ServiceBoxProps = {
    icons?: string,
    title: String,
    list: String[],
}

export type CardFeedBackProps = {
    avatar: String,
    description: String,
    type: String,
    name: String,
}

export type PricePlanProps = {
    type: String;
    price: String;
    service: String[];
    un_include: String[];
}