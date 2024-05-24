from rest_framework import viewsets, permissions 
from .serializers import *
from rest_framework.response import Response 
from .models import * 

class AppointmentViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = Appointments.objects.all()
    serializer_class = AppointmentSerializer

    def list(self, request):
        queryset = Appointments.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)