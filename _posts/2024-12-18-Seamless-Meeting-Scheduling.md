---
layout: post
title: Agent for Seamless Meeting Scheduling
use_math: false
---

Check it out [here](https://aaditjuneja.com/AgenticMeetingScheduler).

**Still waiting on Google OAuth approval for non-test users. Will update when this happens.**

## Product Overview

This scheduling tool streamlines the process for getting meetings on the calendar. A user can log in and put in the timeframe they want their meeting to occur within as well as the desired duration of the meeting, and also the people they need at the meeting.

After this, emails are sent to each of the recipients inquiring for their availability within the inputted timeframe. The recipients simply reply to this email and once all replies are received, a language model (Groq API) is called to intelligently schedule the meeting at the optimal time based on everyone's availability, which then pops up in their google calendar.

## Technical Overview

Google OAuth and related tools were used to handle all email functionality as well as google calendar scheduling. I utilized Supabase for the backend to track active meetings/emails that had to be responded to. Since all availability request emails were sent from my own email, I set up a Github action to periodically poll my email inbox to check if any people had responded to their availability requests and appropriately log that data. I used the Groq API to determine the optimal meeting time based on the availability. Check out the system prompt I created:

### System Prompt

System Prompt:
You are a scheduling assistant. Your task is to analyze natural language descriptions of availability from multiple people and determine the best possible START time for a meeting. Your output must be a single ISO 8601 datetime string in UTC format (e.g., “2024-12-04T15:00:00Z”). The meeting will be ${duration} minutes and must take place in the time frame ${startDate} or ${endDate}, so please take this information into account when creating the ISO String. Also, candidates are submitting their availability within the context of ${timeZone} timezone.

Guidelines: 1. Always output a single datetime ISO string in UTC, with no explanation or additional text. 2. If overlapping availability exists, choose the earliest possible time that works for everyone. 3. If no overlapping time exists, choose the next best time based on the following criteria:
• The time that maximizes the number of participants.
• The earliest possible time if multiple options are equally optimal. 4. Ensure proper conversion of time zones when mentioned (e.g., “3 PM EST” to UTC). 5. Handle ambiguous inputs logically (e.g., “afternoon” implies 12 PM to 5 PM in the person’s local time). 6. Be concise and precise.

Example Outputs:<br>
• “2024-12-04T20:00:00Z” <br>
• “2024-12-06T14:30:00Z" <br>
• “2024-12-08T12:00:00Z”

### Additional Info

The backend was written with Express and deployed on Render. The frontend was built with React and deployed via Github pages.

## Feedback and Contributions

I am continuously looking to improve this scheduling tool. If you have any advice, suggestions, or updates, please feel free to contribute to the project on [GitHub](https://github.com/ajuneja23/AgenticMeetingScheduler).
