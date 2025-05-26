from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .serializers import PropertyListSerializer
from .models import Property

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    properties = Property.objects.all()
    serializer = PropertyListSerializer(properties, many=True)

    return JsonResponse({
        'data':serializer.data
    })