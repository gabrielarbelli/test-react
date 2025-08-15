# Mini Seller Console

A lightweight React application built with Tailwind CSS for managing leads and converting them into sales opportunities.

## Features

### MVP Requirements ✅
- **Leads List**: Load from local JSON file with search, filter, and sort functionality
- **Lead Detail Panel**: Slide-over panel with inline editing for status and email
- **Convert to Opportunity**: Convert leads to opportunities with basic tracking
- **UX States**: Loading, empty, and error states with simulated latency

### Technical Stack
- React 18 with Vite
- Tailwind CSS for styling
- Shadcn/ui components
- Lucide React icons
- Local JSON data with setTimeout simulation

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. Extract the project files
2. Navigate to the project directory:
   ```bash
   cd mini-seller-console
   ```

3. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
pnpm run build
# or
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **View Leads**: The main page displays all leads in a sortable table
2. **Search**: Use the search bar to filter leads by name or company
3. **Filter**: Use the status dropdown to filter leads by their current status
4. **Sort**: Click the score button to toggle between ascending/descending order
5. **Edit Lead**: Click on any lead row to open the detail panel
6. **Update Information**: Edit email and status fields in the detail panel
7. **Convert to Opportunity**: Use the green button to convert qualified leads
8. **View Opportunities**: Converted opportunities appear in the bottom section

## Project Structure

```
src/
├── components/
│   ├── LeadsList.jsx          # Main leads table with search/filter
│   ├── LeadDetailPanel.jsx    # Slide-over panel for lead editing
│   └── OpportunitiesTable.jsx # Opportunities display table
├── data/
│   └── leads.json            # Sample lead data
├── App.jsx                   # Main application component
└── main.jsx                  # Application entry point
```

## Data Structure

### Lead Object
```json
{
  "id": 1,
  "name": "John Doe",
  "company": "TechCorp",
  "email": "john.doe@techcorp.com",
  "source": "Website",
  "score": 85,
  "status": "new"
}
```

### Opportunity Object
```json
{
  "id": 1,
  "name": "Opportunity - John Doe",
  "stage": "prospecting",
  "amount": 25000,
  "accountName": "TechCorp"
}
```

## Features in Detail

### Lead Management
- **Search**: Real-time search by name or company
- **Filter**: Filter by status (New, Contacted, Qualified)
- **Sort**: Sort by score in ascending or descending order
- **Edit**: Inline editing of email and status with validation

### Opportunity Tracking
- **Conversion**: One-click conversion from qualified leads
- **Pipeline**: Visual tracking of opportunity stages
- **Amount**: Random amount generation for demo purposes

### Error Handling
- Email validation with user-friendly messages
- Simulated API errors for testing (commented out)
- Loading states with spinners
- Empty states with helpful messages

## Development Notes

- Uses setTimeout to simulate API latency (500-1000ms)
- Email validation using regex pattern
- Responsive design for mobile and desktop
- Optimistic updates with error rollback capability
- Clean component architecture with proper state management

## License

This project is for demonstration purposes as part of a frontend developer assessment.

