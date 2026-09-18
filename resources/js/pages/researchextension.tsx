import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Research & Extension',
        href: '/researchextension',
    },
];

export default function Researchextension() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Research & Extension" />
        </AppLayout>
    );
}
