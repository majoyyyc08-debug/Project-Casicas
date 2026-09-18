import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admission',
        href: '/admission',
    },
];

export default function Admission() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admission" />
        </AppLayout>
    );
}
