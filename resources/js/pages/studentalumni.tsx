import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Student Alamuni',
        href: '/studentalumni',
    },
];

export default function Studentalumni() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Student Alamuni" />
        </AppLayout>
    );
}
