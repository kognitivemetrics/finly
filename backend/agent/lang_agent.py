from langchain_community.chat_models import ChatOllama
from langchain.agents import initialize_agent, AgentType
from langchain.memory import ConversationBufferMemory
from langchain.tools import Tool

from tools.get_total_spend import get_total_cloud_spend

llm = ChatOllama(
    model="mistral",
    temperature=0,
    base_url="http://host.docker.internal:11434"
)

memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)

tools = [
    Tool(
        name="GetTotalCloudSpend",
        func=get_total_cloud_spend,
        description="Fetch the total cloud and LLM spend from AWS, Azure, GCP, and internal dashboard."
    )
]

agent_executor = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.CONVERSATIONAL_REACT_DESCRIPTION,
    memory=memory,
    verbose=True
)

def run_agent(question):
    return agent_executor.invoke({"input": question})["output"]
