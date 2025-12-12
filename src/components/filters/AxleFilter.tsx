
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface AxleFilterProps {
    selectedAxle: number | null;
    onAxleChange: (value: number | null) => void;
}

// Các tùy chọn số trục phổ biến cho sơ mi rơ mooc và xe tải
const axleOptions = [
    { value: null, label: 'Tất cả' },
    { value: 2, label: '2 trục' },
    { value: 3, label: '3 trục' },
    { value: 4, label: '4 trục' },
    { value: 5, label: '5 trục trở lên' },
];

export const AxleFilter: React.FC<AxleFilterProps> = ({
    selectedAxle,
    onAxleChange,
}) => {
    const handleChange = (value: string) => {
        if (value === 'all') {
            onAxleChange(null);
        } else {
            onAxleChange(parseInt(value, 10));
        }
    };

    return (
        <div>
            <h3 className="text-base font-medium mb-3">Số trục (cầu)</h3>
            <RadioGroup
                value={selectedAxle === null ? 'all' : String(selectedAxle)}
                onValueChange={handleChange}
                className="space-y-2"
            >
                {axleOptions.map((option) => (
                    <div key={option.value ?? 'all'} className="flex items-center space-x-2">
                        <RadioGroupItem
                            value={option.value === null ? 'all' : String(option.value)}
                            id={`axle-${option.value ?? 'all'}`}
                        />
                        <Label
                            htmlFor={`axle-${option.value ?? 'all'}`}
                            className="text-sm font-normal cursor-pointer"
                        >
                            {option.label}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};
