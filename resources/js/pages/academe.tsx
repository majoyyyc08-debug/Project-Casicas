import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Academe',
        href: '/academe',
    },
];

export default function Academe() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Academe" />
        </AppLayout>
    );
}
