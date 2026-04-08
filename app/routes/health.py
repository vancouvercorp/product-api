import time
from datetime import datetime, timezone

from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
async def health_check():
    """
    Health check endpoint for service monitoring.
    Used by load balancers, Kubernetes probes, and alerting systems.
    """
    return {
        "status": "ok",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "service": "product-api",
        "version": "1.0.0",
    }
