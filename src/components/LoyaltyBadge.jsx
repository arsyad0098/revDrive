export default function LoyaltyBadge({ loyalty }) {
    const badgeStyle = 
        loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
        loyalty === 'Silver' ? 'bg-gray-100 text-gray-600 border-gray-200' :
        'bg-orange-50 text-orange-700 border-orange-200'; // Bronze

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${badgeStyle}`}>
            {loyalty}
        </span>
    );
}