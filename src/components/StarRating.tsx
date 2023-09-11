import React, { useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import { Box, Icon } from '@chakra-ui/react';

interface RatingProps {
    totalStars: number;
    defaultRating?: number;
    onChange?: (newRating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ totalStars, defaultRating = 0, }) => {
    const [rating, setRating] = useState(defaultRating);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
        // onChange && onChange(newRating);
    };

    return (
        <Box >
            {Array.from({ length: totalStars }).map((_, index) => (
                <Icon
                    key={index}
                    as={StarIcon}
                    color={index < rating ? 'yellow.400' : 'gray.300'}
                    boxSize={6}
                    cursor="pointer"
                    onClick={() => handleRatingChange(index + 1)}
                />
            ))}
        </Box>
    );
};

export default Rating;
