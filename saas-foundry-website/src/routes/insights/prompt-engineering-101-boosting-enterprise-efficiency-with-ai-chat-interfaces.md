---
title: "Prompt Engineering 101 - Boosting Enterprise Efficiency with AI Chat Interfaces"
date: '2024-09-05'
excerpt: "Learn how to effectively create and use prompts for chat interface-based AI in an enterprise setting. This beginner-friendly guide walks you through the process of crafting prompts for various text-based tasks."
image: "[The image URL will be here once it's generated and uploaded]"
tags: ["AI", "Prompts", "Enterprise", "Productivity", "ChatGPT"]
---

# Mastering AI Prompts: A Guide for Enterprise Staff

## Introduction

In today's enterprise environment, chat interface-based AI has become an invaluable tool for increasing productivity and streamlining workflows. However, the key to unlocking its full potential lies in crafting effective prompts. This guide will walk you through the process of creating and using prompts to maximize your efficiency when working with AI chatbots.

## The Three-Step Process

### 1. Identify Your Task

The first step is to decide on the text-based task you need assistance with. This should be a task that typically results in no more than a few pages of output. For our example, we'll focus on creating user stories for an agile development team.

User stories are the unit of work that developers and testers work on to build features. They take a form similar to this.
```
As a premium customer, I want to access limited edition stock first, so that I can buy products that impress.

Acceptance Criteria:
- The system must prioritize premium customers' orders for limited edition stock.
- The system must notify premium customers when limited edition stock becomes available.
etc.
```

I also like user stories to give some additional background, technical considerations, and testing considerations.

### 2. Craft Your Prompt

A prompt is the first piece of text you share with the AI. It sets the scene, and tells it the skills, personality and style it should embody. A well-crafted prompt can significantly improve the quality and relevance of the AI's response.

How do we create the AI prompt?
By using AI of course!

We wills start simple.

> "Create a generative AI prompt to define user stories for an agile development team. User stories should have some background, a sentence or two, followed by acceptance criteria, technical considerations, and testing considerations. When writing the story you should think from the perspective of the business, developer and QA. Please maintain user story best practises and avoid the word should."

This produces:
```
Generate a comprehensive user story for an agile development team, following this structure:

Title: Create a concise, descriptive title for the user story.

Background: Provide 1-2 sentences of context explaining the business need or problem this story addresses.

User Story: Write the user story in the standard format: 'As a [type of user], I want [an action] so that [a benefit/a value].'

Acceptance Criteria: List 3-5 specific, testable criteria that define when this story is complete. Use the Given-When-Then format for clarity.

Technical Considerations: Outline 2-3 key technical aspects the development team needs to consider when implementing this story. This may include architecture decisions, potential integrations, or performance considerations.

Testing Considerations: Describe 2-3 important testing aspects, including potential edge cases, security concerns, or user experience factors that QA should focus on.

When creating this user story:

Ensure the story is independent, negotiable, valuable, estimable, small, and testable (INVEST criteria).
Write from the perspectives of the business stakeholder, developer, and QA engineer.
Use clear, concise language that all team members can understand.
Avoid using the word 'should' and instead focus on concrete, actionable items.
Ensure the acceptance criteria are specific and measurable.
Consider both functional and non-functional requirements in your story.
Example technical domains to choose from: e-commerce platform, healthcare management system, financial trading application, social media platform, or IoT device management system.
```

That's a great start. You can then iterate on that by asking for changes. For example with API related work it helps to describe URLs, input bodies, response bodies, that type of thing. So we ask:

> "Please enhance the prompt to support API development. Important features include specifying the HTTP verb, URL, input body, and response body."

This then produces:
```
Generate a comprehensive user story for an agile development team working on API development, following this structure:

Title: Create a concise, descriptive title for the user story, indicating it's an API feature.

Background: Provide 1-2 sentences of context explaining the business need or problem this API endpoint addresses.

User Story: Write the user story in the standard format: 'As a [type of user], I want [an action] so that [a benefit/a value].'

API Specifications:
a. HTTP Verb: Specify the appropriate HTTP method (GET, POST, PUT, DELETE, PATCH, etc.).
b. URL: Provide the endpoint URL, including any path parameters.
c. Request Headers: List any required or optional headers.
d. Request Body: If applicable, describe the structure of the request body in JSON format.
e. Query Parameters: If applicable, list any query parameters.
f. Response Body: Describe the structure of the response body in JSON format.
g. Response Codes: List expected response status codes and their meanings.

Acceptance Criteria: List 3-5 specific, testable criteria that define when this story is complete. Use the Given-When-Then format for clarity. Include criteria specific to API behavior.

Technical Considerations: Outline 2-3 key technical aspects the development team needs to consider when implementing this API endpoint. This may include:

Authentication and authorization requirements
Rate limiting considerations
Data validation and sanitization
Potential database interactions or external service calls
Performance considerations (caching, pagination, etc.)
Testing Considerations: Describe 2-3 important testing aspects, including:

Unit testing for the API logic
Integration testing with other systems or databases
Performance testing (response times, concurrent requests)
Security testing (authentication, authorization, input validation)
Edge cases and error handling scenarios
When creating this API user story:

Ensure the story is independent, negotiable, valuable, estimable, small, and testable (INVEST criteria).
Write from the perspectives of the API consumer, backend developer, and QA engineer.
Use clear, concise language that all team members can understand.
Avoid using the word 'should' and instead focus on concrete, actionable items.
Ensure the acceptance criteria are specific and measurable.
Consider both functional and non-functional requirements in your story.
Follow RESTful API best practices where applicable.
Include considerations for API versioning and backwards compatibility.
Example API domains to choose from: e-commerce platform API, healthcare data API, financial transactions API, social media integration API, or IoT device management API.
```

Great! 

Just before we're done, I like to always add a line like this:
```
Once you understand the instructions, tell me "I am ready to create stories together, and wait for further input".
```
This ensures that the AI doesn't go on a tangent and start writing a story before we give our input. 

Save that as a note somewhere that you can access to copy and paste it when needed.

### 3. Test Your Prompt
Now that we have our prompt, let's use it to create a sample user story:

"Let's create a user story for a change to an existing API. We need a new endpoint that lets a customer update their personal information."

### 4. The output

Title: Add API Endpoint for Customer Personal Information Update

Background: Currently, customers can view their personal information through the API but cannot update it directly. This new endpoint will empower customers to manage their own data, reducing customer service workload and improving data accuracy.

User Story: As a registered customer, I want to update my personal information through the API so that I can keep my account details current without contacting customer support.

API Specifications:
a. HTTP Verb: PATCH
b. URL: /api/v1/customers/{customerId}/personal-info
c. Request Headers:
   - Content-Type: application/json
   - Authorization: Bearer {access_token}
d. Request Body:
   ```json
   {
     "firstName": "string",
     "lastName": "string",
     "email": "string",
     "phoneNumber": "string",
     "address": {
       "street": "string",
       "city": "string",
       "state": "string",
       "postalCode": "string",
       "country": "string"
     }
   }
   ```
e. Query Parameters: None
f. Response Body:
   ```json
   {
     "message": "Personal information updated successfully",
     "updatedFields": ["firstName", "email", "address"]
   }
   ```
g. Response Codes:
   - 200 OK: Information updated successfully
   - 400 Bad Request: Invalid input data
   - 401 Unauthorized: Invalid or missing access token
   - 403 Forbidden: User doesn't have permission to update this customer's information
   - 404 Not Found: Customer ID not found
   - 422 Unprocessable Entity: Unable to process the contained instructions

Acceptance Criteria:
1. Given a valid customer ID and access token, when a PATCH request is sent with updated personal information, then the customer's information is updated in the database and a 200 OK response is returned.
2. Given a PATCH request with partial information, when the request is processed, then only the provided fields are updated while other fields remain unchanged.
3. Given an invalid email format in the request body, when the request is processed, then a 400 Bad Request response is returned with an error message indicating the issue.
4. Given a request to update another customer's information, when processed with a non-admin token, then a 403 Forbidden response is returned.
5. Given a successful update, when the response is sent, then it includes a list of the fields that were actually changed.

Technical Considerations:
1. Implement field-level validation for each updateable field, including email format, phone number format, and address completeness.
2. Use optimistic locking or a similar mechanism to handle potential concurrent update conflicts.
3. Ensure that sensitive data like access tokens are not logged in application logs.

Testing Considerations:
1. Unit test each validation rule and the update logic independently.
2. Perform integration tests to ensure database updates are correctly reflected and consistent across the system.
3. Conduct security testing to verify that a user cannot update information for a different customer ID than their own.

### Take aways
Treat generative AI like a part machine, part human. It needs context and, if possible, examples to do well. After that, it is super human. 

That, plus reaching perfection is about iteration. Iteration that you must guide. Always try and think "How can I use AI to achieve this?". For instance if your prompt isn't producing great results, you might try and work out how and manipulate it. This may work. Another approach though is to give it the prompt, say it doesn't work for you, and give it a few examples of stories that you love, asking it to change the prompt to produce stories like them in the future!
